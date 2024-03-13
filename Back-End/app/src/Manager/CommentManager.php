<?php

namespace App\Manager;

use App\Entity\Comment;


class CommentManager extends BaseManager{

    public function getAllComments(): array
    {
        $query = $this->pdo->query("select * from Comments");

        $comments = [];

        while ($data = $query->fetch(\PDO::FETCH_ASSOC)) {
            $comments = new Comment($data);
        }

        return $comments;
    }

    public function insertComment(Comment $post) {

        $query = $this->pdo->prepare("INSERT INTO Comments (content,author_id,author_username) VALUES (:comment,1,:author_username)");
        $query->bindValue("comment", $post->getComment(), \PDO::PARAM_STR);
        $query->bindValue("author_username", $post->getAuthorUsername(), \PDO::PARAM_STR);

        $query->execute();
    }
}