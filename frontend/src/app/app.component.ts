import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  produtos: any[] = [];
  
  // Objeto para o formulário
  novoProduto = {
    nome: '',
    categoria: '',
    quantidade: 0,
    preco: 0
  };

  private apiUrl = 'http://localhost:8080/api/produtos';

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.carregarProdutos();
  }

  carregarProdutos() {
    this.http.get<any[]>(this.apiUrl).subscribe(data => {
      this.produtos = data;
    });
  }

  salvarProduto() {
    // Validação simples para não salvar vazio
    if (!this.novoProduto.nome) return;

    this.http.post(this.apiUrl, this.novoProduto).subscribe({
      next: () => {
        // Ação: Apenas recarrega a lista e limpa o formulário (Silencioso)
        this.carregarProdutos();
        this.novoProduto = { nome: '', categoria: '', quantidade: 0, preco: 0 };
      },
      error: (erro) => {
        console.error('Erro ao salvar:', erro);
      }
    });
  }

  deletarProduto(id: number) {
    if(confirm('Tem certeza que deseja excluir este item do estoque?')) {
      this.http.delete(`${this.apiUrl}/${id}`).subscribe(() => {
        this.carregarProdutos();
      });
    }
  }
}