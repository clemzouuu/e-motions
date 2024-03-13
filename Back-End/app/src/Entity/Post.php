<?php

namespace App\Entity;

class Post extends BaseEntity
{
    private int $id;
    private string $content;
    private string $username;
    private int $postId;
    private string $created;

    /**
     * @return int
     */
    public function getPostId(): int
    {
        return $this->postId;
    }

    /**
     * @param int $postId
     */
    public function setPostId(int $postId): void
    {
        $this->postId = $postId;
    }

    /**
     * @return string
     */
    public function getCreated(): string
    {
        $phpdate = strtotime( $this->created );
        $mysqldate = date(  'd M Y '.' à ' .'H:i ', $phpdate );
        return $mysqldate;
    }

    /**
     * @param string $created
     */
    public function setCreated(string $created): void
    {
        $this->created = $created;
    }




    /**
     * @return mixed
     */
    public function getUsername(): mixed
    {
        return $this->username;
    }

    /**
     * @param mixed $username
     */
    public function setUsername(mixed $username): void
    {
        $this->username = $username;
    }

    /**
     * @return int
     */
    public function getId(): int
    {
        return $this->id;
    }

    /**
     * @param int $id
     * @return Post
     */
    public function setId(int $id): Post
    {
        $this->id = $id;
        return $this;
    }

    /**
     * @return string
     */
    public function getContent(): string
    {
        return $this->content;
    }

    /**
     * @param string $content
     * @return Post
     */
    public function setContent(string $content): Post
    {
        $this->content = $content;
        return $this;
    }
}
