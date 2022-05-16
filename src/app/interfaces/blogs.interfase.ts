export interface IBlogsRequest{
    title: string,
    text: string,
    author: string
}
export interface IBlogsResponse extends IBlogsRequest{
    id: number
}
