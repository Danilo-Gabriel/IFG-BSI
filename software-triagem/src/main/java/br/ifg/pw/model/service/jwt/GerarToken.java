package br.ifg.pw.model.service.jwt;

import io.smallrye.jwt.build.Jwt;
import jakarta.enterprise.context.ApplicationScoped;
import org.eclipse.microprofile.jwt.Claims;

import java.time.Duration;
import java.time.Instant;

@ApplicationScoped
public class GerarToken {

    public static String gerarToken(String email, String role)  {

        String token =
                Jwt.issuer("http://localhost:8080")
                        .expiresAt(Instant.now().plus(Duration.ofHours(1)))
                        .upn("marcus-movie@app-movie-api.io")
                        .groups("admin")
                        .claim(Claims.email, email)
                        .sign();
        System.out.println(token);

        return token;
    }
}
