import java.util.ArrayList;
import java.util.List;

public class Post {
    private int id;
    private User author;
    private String content;
    private List<Comment> comments = new ArrayList<>();

    public Post(int id, User author, String content) {
        this.id = id;
        this.author = author;
        this.content = content;
    }

    public int getId() { return id; }
    public User getAuthor() { return author; }
    public String getContent() { return content; }
    public List<Comment> getComments() { return comments; }
}
