package jev.rest.webservices.restfulwebservices.basic;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.HttpMethod;
import org.springframework.security.config.Customizer;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.web.SecurityFilterChain;

@Configuration
public class BasicAuthSecurityConfiguration {
	
	//filter chain
	//authentication all req
	//basic auth
	//disabling csrf
	//stateless rest api

	@Bean
	SecurityFilterChain securityFilterChain(HttpSecurity http) throws Exception {
		//1: Response to preflight request doesn't pass access control check
		//2: basic auth
		http.authorizeHttpRequests(
						auth -> {
							auth
								.antMatchers(HttpMethod.OPTIONS, "/**").permitAll()			//access to preflight req
								.anyRequest().authenticated();
						}
						);
		http.httpBasic(Customizer.withDefaults());
		http.sessionManagement(
				session ->session.sessionCreationPolicy
				(SessionCreationPolicy.STATELESS));
		
		http.csrf(csrf -> csrf.disable());
		
		//http.headers(headers -> headers.frameOptions(frameOptionsConfig-> frameOptionsConfig.disable()));
		
		
		return http.build();
}
	
}
