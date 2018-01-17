package application.auth.user;

import java.util.Collection;
import java.util.Optional;



public interface UsrService {
    public Optional<User> findUserByEmail(String email);
    public Optional<User> findUserByResetToken(String resetToken);
    public void save(User user);
}