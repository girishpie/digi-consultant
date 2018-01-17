package application.auth.user;

import java.util.Collection;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;

import application.auth.roles.RoleRepository;


@Service("usrService")
public class UsrServiceImpl implements UsrService {

	@Autowired
	private final UserRepository userRepository;

	public UsrServiceImpl(UserRepository userRepository) {
        this.userRepository = userRepository;
      
    }
	
	@Override
	public Optional<User> findUserByEmail(String email) {
		return userRepository.findUserByEmail(email);
	}

	@Override
	public Optional<User> findUserByResetToken(String resetToken) {
		return userRepository.findUserByResetToken(resetToken);
	}

	@Override
	public void save(User user) {
		userRepository.save(user);
	}
}