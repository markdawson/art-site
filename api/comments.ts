import fetch from 'node-fetch'
import { EntityId, Comment, Person } from "../shared/types"
import { config } from "./config"

export async function fetchComments(postId: EntityId): Promise<Comment[]> {
    const url = `${config.baseUrl}/comments/${postId}`
    const res = await fetch(url)
    return await res.json()
}

export async function submitComment(
    postId: EntityId,
    name: Person,
    comment: string
): Promise<Response> {
    return await fetch(`${config.baseUrl}/posts/${postId}/comments`, {
        method: "POST",
        headers: { "Content-Type": "application/json;charset=utf-8" },
        body: JSON.stringify({ name, comment })
    })
}