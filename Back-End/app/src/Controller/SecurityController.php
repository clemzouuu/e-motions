<?php

namespace App\Controller;

use App\Entity\User;
use App\Factory\PDOFactory;
use App\Manager\UserManager;
use App\Controller\AbstractController;
use App\Route\Route;


class SecurityController extends AbstractController
{
    #[Route('/registerUser', name: "new user", methods: ["POST"])]
    public function registerNewUser():bool
    {
        $username = htmlentities($_POST['username']);
        $password = $_POST["password"];
        $sanitizedUsername = filter_input(INPUT_POST,"username",FILTER_SANITIZE_SPECIAL_CHARS);
        $userManager = new UserManager(new PDOFactory());
        $newUser = new User();
        $newUser->setUsername($sanitizedUsername);
        $newUser->setPassword($password);
        if($userManager->verifyDuplicates($newUser)){
            $userManager->insertUser($newUser);
            return TRUE;
        }
        return FALSE;
        
    }

    #[Route('/logged', name: "logged", methods: ["POST"])]
    public function logged() 
    {
        $formUsername = $_POST['username'];
        $formPwd = $_POST['password'];
        $userManager = new UserManager(new PDOFactory());
        $user = $userManager->getByUsername($formUsername);

        if (!$user) {
            return;
        }
        if ($user->passwordMatch($formPwd)) {
           return;
        }
    }


    #[Route('/api/login', name: "login", methods: ["GET", "POST"])]
    public function login()
    {
        echo"salut";
    }
}
