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

    #[Route('/api/logUser', name: "log user", methods: ["POST"])]
    public function logUser() 
    {

        $data = json_decode(file_get_contents('php://input'), true);
        $username = htmlentities($data['username']);
        $password = $data['password']; 
        $userManager = new UserManager(new PDOFactory());
        $user = $userManager->getByUsername($username);
        
        if (!$user) {
            return false;
        }
 
        
        $hash = $userManager->getHash($username);

        if ($hash !== null && $user->passwordMatch($password, $hash)) {
            $userManager->getUsernameAndId($username);
            http_response_code(200);
        } else {
            http_response_code(404); 
            echo json_encode(['message' => "Utilisateur non trouvé ou mot de passe incorrect"]);
        }
    }


    #[Route('/api/login', name: "login", methods: ["GET", "POST"])]
    public function login()
    {
        echo"salut";
    }
}
