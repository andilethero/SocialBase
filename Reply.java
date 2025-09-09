public class Reply {
    private int id;
    private User author;
    private String content;

    public Reply(int id, User author, String content) {
        this.id = id;
        this.author = author;
        this.content = content;
    }

    public int getId() { return id; }
    public User getAuthor() { return author; }
    public String getContent() { return content; }
}
