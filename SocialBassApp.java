import javafx.application.Application;
import javafx.scene.Scene;
import javafx.scene.control.*;
import javafx.scene.layout.VBox;
import javafx.stage.Stage;
import java.util.*;

public class SocialBaseApp extends Application {

    private SocialBaseService service = new SocialBaseService();

    @Override
    public void start(Stage primaryStage) {
        primaryStage.setTitle("SocialBase");

        // Login Screen
        Label userLabel = new Label("Username:");
        TextField usernameField = new TextField();
        Label passLabel = new Label("Password:");
        PasswordField passwordField = new PasswordField();
        Button loginBtn = new Button("Login");
        Button registerBtn = new Button("Register");

        VBox loginLayout = new VBox(10, userLabel, usernameField, passLabel, passwordField, loginBtn, registerBtn);
        Scene loginScene = new Scene(loginLayout, 300, 200);

        // Main Menu
        Label welcomeLabel = new Label();
        Button createPostBtn = new Button("Create Post");
        Button viewPostsBtn = new Button("View My Posts");
        Button logoutBtn = new Button("Logout");

        VBox mainLayout = new VBox(10, welcomeLabel, createPostBtn, viewPostsBtn, logoutBtn);
        Scene mainScene = new Scene(mainLayout, 400, 300);

        // Event Handlers
        loginBtn.setOnAction(e -> {
            String username = usernameField.getText();
            String password = passwordField.getText();
            if (service.loginUser(username, password)) {
                welcomeLabel.setText("Welcome, " + username);
                primaryStage.setScene(mainScene);
            } else {
                Alert alert = new Alert(Alert.AlertType.ERROR, "Invalid login!");
                alert.showAndWait();
            }
        });

        registerBtn.setOnAction(e -> {
            String username = usernameField.getText();
            String password = passwordField.getText();
            service.registerUser(username, password, username + "@mail.com");
            Alert alert = new Alert(Alert.AlertType.INFORMATION, "User registered!");
            alert.showAndWait();
        });

        createPostBtn.setOnAction(e -> {
            TextInputDialog dialog = new TextInputDialog();
            dialog.setTitle("New Post");
            dialog.setHeaderText("Enter your post content:");
            Optional<String> result = dialog.showAndWait();
            result.ifPresent(content -> service.createPost(content));
        });

        viewPostsBtn.setOnAction(e -> {
            User user = service.getLoggedInUser();
            Collection<Post> posts = service.getPostsByUser(user);
            StringBuilder sb = new StringBuilder();
            for (Post p : posts) {
                sb.append("Post ID: ").append(p.getId()).append(" -> ").append(p.getContent()).append("\\n");
            }
            Alert alert = new Alert(Alert.AlertType.INFORMATION, sb.toString());
            alert.setHeaderText("Your Posts");
            alert.showAndWait();
        });

        logoutBtn.setOnAction(e -> {
            service.logout();
            primaryStage.setScene(loginScene);
        });

        primaryStage.setScene(loginScene);
        primaryStage.show();
    }

    public static void main(String[] args) {
        launch(args);
    }
}
