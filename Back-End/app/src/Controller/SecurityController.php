<?php

namespace App\Controller;

use App\Entity\User;
use App\Factory\PDOFactory;
use App\Manager\UserManager;
use App\Route\Route;


class SecurityController extends AbstractController
{

    #[Route('/logged', name: "logged", methods: ["POST"])]
    public function logged()
    {
        $formUsername = $_POST['username'];
        $formPwd = $_POST['password'];
        $userManager = new UserManager(new PDOFactory());
        $user = $userManager->getByUsername($formUsername);

        if (!$user) {
            header('Location: /login');
            exit;
        }
        if ($user->passwordMatch($formPwd)) {
            session_start();
            $_SESSION["connecte"] = true;
            $username = $_POST['username'];
            setcookie('username', $username);
            header('Location: /home');
            exit;
        }
        header('Location: /home');
        exit;
    }


    #[Route('/login', name: "login", methods: ["GET", "POST"])]
    public function login()
    {
        $this->render("login.php", [], "Connexion");
    }

    #[Route('/', name: "home page", methods: ["GET"])]
    public function loggedUser()
    {
        $this->render("/quickie.php",
            [],
            "Page utilisateur");
    }

    #[Route('/register', name: "register", methods: ["GET"])]
    public function registerPage()
    {
        $this->render("/register.php", [], "Créer un compte");
    }

    #[Route('/register-new-user', name: "registed", methods: ["POST"])]
    public function registerNewUser()
    {
        $username = htmlentities($_POST['username']);
        $password = $_POST["password"];
        $sanitizedUsername = filter_input(INPUT_POST,"username",FILTER_SANITIZE_SPECIAL_CHARS);
        $email = $_POST['email'];
        $userManager = new UserManager(new PDOFactory());
        $newUser = new User();
        $newUser->setUsername($sanitizedUsername);
        $newUser->setPassword($password);
        $newUser->setEmail($email);
        if($userManager->verifyDuplicates($newUser)){
            $userManager->insertUser($newUser);
            session_start();
            $_SESSION["connecte"] = true;
            $username = $sanitizedUsername;
            setcookie('username', $username);
            header('Location: /home');
        }
    }
}
