<?php

namespace App\Entity;

class Comment extends BaseEntity
{
    private int $commentId;
    private string $comment;
    private int $authorId;
    private string $authorUsername;
    private string $created;

    /**
     * @return int
     */
    public function getCommentId(): int
    {
        return $this->commentId;
    }

    /**
     * @param int $commentId
     */
    public function setCommentId(int $commentId): void
    {
        $this->commentId = $commentId;
    }

    /**
     * @return string
     */
    public function getComment(): string
    {
        return $this->comment;
    }

    /**
     * @param string $comment
     */
    public function setComment(string $comment): void
    {
        $this->comment = $comment;
    }

    /**
     * @return string
     */
    public function getAuthorId(): string
    {
        return $this->authorId;
    }

    /**
     * @param string $authorId
     */
    public function setAuthorId(string $authorId): void
    {
        $this->authorId = $authorId;
    }

    /**
     * @return int
     */
    public function getAuthorUsername(): string
    {
        return $this->authorUsername;
    }

    /**
     * @param int $authorUsername
     */
    public function setAuthorUsername(string $authorUsername): void
    {
        $this->authorUsername = $authorUsername;
    }

    /**
     * @return string
     */
    public function getCreated(): string
    {
        return $this->created;
    }

    /**
     * @param string $created
     */
    public function setCreated(string $created): void
    {
        $this->created = $created;
    }


}