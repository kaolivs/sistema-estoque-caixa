package entities;

import jakarta.persistence.*;
import lombok.Data;

@Data
@Entity
public class Produto {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    
    private String nome;
    private String categoria;
    private Integer quantidade;
    private Double preco;
}