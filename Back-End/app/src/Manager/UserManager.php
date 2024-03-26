<?php

namespace App\Manager;

use App\Entity\User;

class UserManager extends BaseManager
{
    /**
     * @return User[]
     */
    public function getAllUsers(): array
    {
        $query = $this->pdo->query("select * from Users");

        $users = [];

        while ($data = $query->fetch(\PDO::FETCH_ASSOC)) {
            $users[] = new User($data);
        }

        return $users;
    }

    public function getByUsername(string $username): ?User
    {
        $query = $this->pdo->prepare("SELECT * FROM Users WHERE username = :username");
        $query->bindValue("username", $username, \PDO::PARAM_STR);
        $query->execute();
        $data = $query->fetch(\PDO::FETCH_ASSOC);

        if ($data) {
            return new User($data);
        }
        echo json_encode(['message' => "Nom d'utilisateur ou mot de passe invalide."]);
        http_response_code(404);
        return null;
    }

    public function getHash(string $username): string
    {
        $query = $this->pdo->prepare("SELECT password FROM Users WHERE username = :username");
        $query->bindValue("username", $username, \PDO::PARAM_STR);
        $query->execute();
        $data = $query->fetch(\PDO::FETCH_ASSOC);

        if ($data) {
            return $data['password'];
        }
        return null;
    }

    public function insertUser(User $user)
    {
        $query = $this->pdo->prepare("INSERT INTO Users (password, username) VALUES (:password, :username)");
        $query->bindValue("password", $user->getHashedPassword(), \PDO::PARAM_STR);
        $query->bindValue("username", $user->getUsername(), \PDO::PARAM_STR);
        $query->execute();
    }

    public function verifyDuplicates(User $user,array $data):bool {
        $username = $data['username'];

    // Vérifier si le nom d'utilisateur ou l'adresse mail existe déjà dans la base de données
        $query = $this->pdo->prepare('SELECT * FROM Users WHERE username = :username');
        $query->execute(['username' => $username]);
        $user = $query->fetch();

        if ($user) {
            // Afficher un message d'erreur ou un message d'avertissement
            if ($user['username'] === $username) {
                echo "Le nom d'utilisateur est déjà utilisé.";
                return false;
            }
        }else {
            return true;
        }
    }

}
