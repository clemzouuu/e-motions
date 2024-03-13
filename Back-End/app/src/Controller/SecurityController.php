<?php

namespace App\Controller;

use App\Entity\User;
use App\Factory\PDOFactory;
use App\Manager\UserManager;
use App\Controller\AbstractController;
use App\Route\Route;


class SecurityController extends AbstractController
{
    #[Route('/api/registerUser', name: "new user", methods: ["POST"])]
    public function registerNewUser():void
    { 
        $data = json_decode(file_get_contents('php://input'), true);
        $username = htmlentities($data['username']);
        $password = $data['password'];  

        if($username && $password){
            
            $userManager = new UserManager(new PDOFactory());
            $newUser = new User();
            $newUser->setUsername($username);
            $newUser->setPassword($password);
            if($userManager->verifyDuplicates($newUser,$data)){
                $userManager->insertUser($newUser);
            }
        } 
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
