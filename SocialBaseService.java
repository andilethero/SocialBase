import java.util.*;

public class SocialBaseService {
    private Map<Integer, User> users = new HashMap<>();
    private Map<Integer, Post> posts = new HashMap<>();
    private int userCounter = 1;
    private int postCounter = 1;

    private User loggedInUser;

    public boolean registerUser(String username, String password, String email) {
        User user = new User(userCounter++, username, password, email);
        users.put(user.getId(), user);
        return true;
    }

    public boolean loginUser(String username, String password) {
        for (User u : users.values()) {
            if (u.getUsername().equals(username) && u.getPassword().equals(password)) {
                loggedInUser = u;
                return true;
            }
        }
        return false;
    }

    public void logout() { loggedInUser = null; }
    public boolean isLoggedIn() { return loggedInUser != null; }
    public User getLoggedInUser() { return loggedInUser; }

    public void createPost(String content) {
        Post post = new Post(postCounter++, loggedInUser, content);
        posts.put(post.getId(), post);
    }

    public Collection<Post> getPostsByUser(User user) {
        List<Post> result = new ArrayList<>();
        for (Post p : posts.values()) {
            if (p.getAuthor().equals(user)) {
                result.add(p);
            }
        }
        return result;
    }
}
