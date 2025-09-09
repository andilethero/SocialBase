import java.util.ArrayList;
import java.util.List;

public class Comment {
    private int id;
    private User author;
    private String content;
    private List<Reply> replies = new ArrayList<>();

    public Comment(int id, User author, String content) {
        this.id = id;
        this.author = author;
        this.content = content;
    }

    public int getId() { return id; }
    public User getAuthor() { return author; }
    public String getContent() { return content; }
    public List<Reply> getReplies() { return replies; }
}
