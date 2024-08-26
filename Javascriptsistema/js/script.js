const data = {
    "financeiro": {
        "Supervisor Financeiro": {
            "Solicitação de Ativação do Cartão Zona Azul": [
                "A01: Quando há solicitação",
                "A02: Pegar o celular",
                "A03: Abrir o Aplicativo do Zona Azul",
                "A04: O veículo já está no sistema?",
                "A05: Cadastrar veículo no aplicativo do Zona Azul",
                "A06: Ir na aba 'placas e usos' na aba de 'veículos' e depois em 'novo', selecionando se é moto ou carro",
                "A07: Preencher informações, adicionando os dados da placa do veículo",
                "A08: Apertar em 'Cadastrar'",
                "A09: Selecionar veículo",
                "A10: Apertar o botão 'ativar cartão'",
                "A11: Selecionar a duração e a forma de pagamento, escolhendo a opção 'usar meus créditos'",
                "A12: Confirmar ativação",
                "A13: Cartão ativado"
            ],
            "Revisão das Provisões de Pagamento": [
                "A01: Semanalmente",
                "A02: Entrar no site do Sicredi",
                "A03: Apertar no botão 'DDA/Agenda de boletos'",
                "A04: Apertar no botão 'Administrador financeiro'",
                "A05: Apertar no botão 'Abrir pesquisa avançada'",
                "A06: Inserir datas da pesquisa (início e conclusão da semana requerida)",
                "A07: Apertar em 'pesquisar'",
                "A08: Imprimir o relatório das provisões da semana para pagamento",
                "A09: Abrir o OMIE",
                "A10: Ir na aba 'Finanças'",
                "A11: Apertar no botão 'Contas a pagar' e depois em 'exibir todas'",
                "A12: Apertar em 'Razão Social' buscando pelo nome da empresa ou da pessoa",
                "A13: Conferir informações como o valor e a data, alterando-os caso seja necessário",
                "A14: Revisão dos pagamentos concluída"
            ],
            "Recebimento de Notas Fiscais Físicas": [
                "A01: Quando há recebimento de nota fiscal",
                "A02: Receber nota fiscal",
                "A03: Lançar no sistema OMIE",
                "A04: Pegar a nota fiscal",
                "A05: Colocar a nota no scanner",
                "A06: Abrir 'Epson scan 2' para escanear a nota fiscal",
                "A07: Apertar em 'Digitalizar'",
                "A08: Salvar como PNG no computador após ter sido escaneado",
                "A09: Anexar o PDF da nota no sistema OMIE",
                "A10: Lançar as provisões da nota no sistema (vencimento, valor de pagamento e parcela), programando as repetições no sistema a partir das datas dos pagamentos posteriores",
                "A11: Conferir os lançamentos",
                "A12: Anexar nota no sistema em formato de PDF",
                "A13: Apertar botão (SALVAR) no sistema OMIE",
                "A14: Salvar na pasta ONE DRIVE - Central NIT",
                "A15: Recebimento de notas fiscais finalizado"
            ]
        }
    }
};

function loadAreas() {
    const areaSelect = document.getElementById('areas');
    areaSelect.innerHTML = '<option value="">Selecione uma área:</option>';
    
    const areas = Object.keys(data);
    areas.forEach(area => {
        const option = document.createElement('option');
        option.value = area;
        option.text = area.charAt(0).toUpperCase() + area.slice(1);
        areaSelect.appendChild(option);
    });
}

function loadCargos() {
    const area = document.getElementById('areas').value;
    const cargoSelect = document.getElementById('cargos');
    cargoSelect.innerHTML = '<option value="">Selecione um cargo:</option>';
    document.getElementById('processos').innerHTML = '<option value="">Selecione um processo:</option>';
    document.getElementById('detalhes-list').innerHTML = '';
    document.getElementById('fluxograma').style.display = 'none';

    if (area) {
        const cargos = Object.keys(data[area]);
        cargos.forEach(cargo => {
            const option = document.createElement('option');
            option.value = cargo;
            option.text = cargo;
            cargoSelect.appendChild(option);
        });
        cargoSelect.disabled = false;
    } else {
        cargoSelect.disabled = true;
        document.getElementById('processos').disabled = true;
    }
}

function loadProcessos() {
    const area = document.getElementById('areas').value;
    const cargo = document.getElementById('cargos').value;
    const processoSelect = document.getElementById('processos');
    processoSelect.innerHTML = '<option value="">Selecione um processo:</option>';
    document.getElementById('detalhes-list').innerHTML = '';
    document.getElementById('fluxograma').style.display = 'none';

    if (cargo) {
        const processos = Object.keys(data[area][cargo]);
        processos.forEach(processo => {
            const option = document.createElement('option');
            option.value = processo;
            option.text = processo;
            processoSelect.appendChild(option);
        });
        processoSelect.disabled = false;
    } else {
        processoSelect.disabled = true;
    }
}

function loadDetalhes() {
    const area = document.getElementById('areas').value;
    const cargo = document.getElementById('cargos').value;
    const processo = document.getElementById('processos').value;
    const detalhesList = document.getElementById('detalhes-list');

    if (processo) {
        const etapas = data[area][cargo][processo];
        detalhesList.innerHTML = '';
        etapas.forEach(etapa => {
            const li = document.createElement('li');
            li.textContent = etapa;
            detalhesList.appendChild(li);
        });

        // Mapeamento do nome do processo para a imagem do fluxograma correspondente
        let fluxogramaUrl;
        if (processo === "Solicitação de Ativação do Cartão Zona Azul") {
            fluxogramaUrl = `img/fluxogramas/financeiro/Supervisor Financeiro/Doc. Solicitação de Ativação do Cartão Zona Azul (2) 27.07.2023 - Luigi Ximenes.png`;
        } else if (processo === "Revisão das Provisões de Pagamento") {
            fluxogramaUrl = `img/fluxogramas/financeiro/Supervisor Financeiro/Doc. AtualizaÃ§Ã£o Da Planilha De ComissÃ£o Referente Ao Pagamento  Das Escolas (3) 29.08.2023.png`;
        }

        // Carregar a imagem do fluxograma, se existir
        if (fluxogramaUrl) {
            document.getElementById('fluxograma-imagem').src = fluxogramaUrl;
            document.getElementById('fluxograma').style.display = 'block';
        } else {
            document.getElementById('fluxograma').style.display = 'none';
        }

        // Esconder a seleção e mostrar os detalhes
        document.getElementById('selecao').style.display = 'none';
        document.getElementById('detalhes').style.display = 'block';
    }
}


function voltar() {
    document.getElementById('selecao').style.display = 'block';
    document.getElementById('detalhes').style.display = 'none';
}

document.addEventListener('DOMContentLoaded', loadAreas);
