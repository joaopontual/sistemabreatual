const dataClientes = {
    "Cliente A": {
        "Serviços Prestados": [
            "Consultoria em Gestão Empresarial",
            "Planejamento Estratégico",
            "Análise de Mercado"
        ],
        "Forma de Pagamento": [
            "Pagamento à vista com 10% de desconto",
            "Parcelamento em até 12x sem juros",
            "Financiamento via BNDES"
        ],
        "Contato": [
            "Telefone: (11) 1234-5678",
            "Email: clienteA@empresa.com.br",
            "Endereço: Rua Exemplo, 123, São Paulo, SP"
        ]
    },
    "Cliente B": {
        "Serviços Prestados": [
            "Desenvolvimento de Software",
            "Suporte Técnico",
            "Treinamento de Equipe"
        ],
        "Forma de Pagamento": [
            "Parcelamento em até 6x sem juros",
            "Boleto bancário",
            "Transferência bancária"
        ],
        "Contato": [
            "Telefone: (21) 9876-5432",
            "Email: clienteB@empresa.com.br",
            "Endereço: Avenida Exemplo, 456, Rio de Janeiro, RJ"
        ]
    }
    // Adicione mais clientes conforme necessário
};

// Função para carregar a lista de clientes
function loadClientes() {
    const clienteSelect = document.getElementById('clientes');
    clienteSelect.innerHTML = '<option value="">Selecione um cliente:</option>'; // Limpa o dropdown
    
    const clientes = Object.keys(dataClientes);
    clientes.forEach(cliente => {
        const option = document.createElement('option');
        option.value = cliente;
        option.text = cliente;
        clienteSelect.appendChild(option);
    });
}

// Função para carregar as informações disponíveis para o cliente selecionado
function loadInformacoes() {
    const cliente = document.getElementById('clientes').value;
    const informacaoSelect = document.getElementById('informacoes');
    informacaoSelect.innerHTML = '<option value="">Selecione uma informação:</option>';
    document.getElementById('detalhes-list').innerHTML = '';

    if (cliente) {
        const informacoes = Object.keys(dataClientes[cliente]);
        informacoes.forEach(info => {
            const option = document.createElement('option');
            option.value = info;
            option.text = info;
            informacaoSelect.appendChild(option);
        });
        informacaoSelect.disabled = false;
    } else {
        informacaoSelect.disabled = true;
    }
}

// Função para carregar os detalhes da informação selecionada
function loadDetalhesCliente() {
    const cliente = document.getElementById('clientes').value;
    const informacao = document.getElementById('informacoes').value;
    const detalhesList = document.getElementById('detalhes-list');

    if (informacao) {
        const detalhes = dataClientes[cliente][informacao];
        detalhesList.innerHTML = '';
        detalhes.forEach(detalhe => {
            const li = document.createElement('li');
            li.textContent = detalhe;
            detalhesList.appendChild(li);
        });

        // Esconder a seleção e mostrar os detalhes
        document.getElementById('selecao').style.display = 'none';
        document.getElementById('detalhes').style.display = 'block';
    }
}

// Função para voltar à seleção de cliente e informação
function voltar() {
    document.getElementById('selecao').style.display = 'block';
    document.getElementById('detalhes').style.display = 'none';
}

// Chama a função para carregar os clientes ao carregar a página
document.addEventListener('DOMContentLoaded', loadClientes);
