import { useState } from 'react';
import './App.css';
import api from './services/api';
import axios from 'axios';
import { validate } from 'gerador-validador-cpf'



const App = () => {

  const validarCpf = (cpf) => {
    console.log(validate(cpf));
    if (validate(cpf) === false)
      alert("CPF inválido!")  
  }

  const fetchEndereco = async (cep) => {
    await axios.get(`https://viacep.com.br/ws/${cep}/json/`).then(endereco => {
      console.log(endereco);
      setForm(prevForm => ({ ...prevForm, endereco: endereco.data.logradouro }));
      setForm(prevForm => ({ ...prevForm, bairro: endereco.data.bairro }));
      setForm(prevForm => ({ ...prevForm, cidade: endereco.data.localidade }));
      setForm(prevForm => ({ ...prevForm, estado: endereco.data.uf }));

    });
  };

  const [form, setForm] = useState({
    nome: "",
    dataNascimento: "",
    estadoCivil: "",
    genero: "",
    cargo: "",
    email: "",
    celular: "",
    telFixo: "",
    endereco: "",
    bairro: "",
    cidade: "",
    estado:"",
    cep: "",
    RG: "",
    CPF: "",
    veiculo: false,
    cnh: false
  })



  const handleChange = e => {

    setForm(prevForm => ({ ...prevForm, [e.target.name]: e.target.value }));
  }

  const handleRadio = (field, value) => {
    setForm(prevForm => ({ ...prevForm, [field]: value }))
  }

  const handleSubmit = async e => {
    e.preventDefault();

    await api.post('register', form)
      .then(success => {
        console.log(success);
        alert("Cadastro de candidato bem sucedido!!!")
      })
      .catch(error => {
        alert("Erro ao cadastrar candidato");
        console.log(error);
      });
  }

  return (
    <div>

      <header>
        <h1>JobsNET</h1>
      </header>

      <p className="cabecalho">
        A JobsNET é especialista em recrutamento e seleção de profissionais nas mais diversas áreas
        <br />
        Conecte-se com as melhores oportunidades!
      </p>

      <div>
        <h2>Cadastro de Candidatos (as)</h2>
      </div>

      <form onSubmit={handleSubmit}>
        <p className="cabecalho2"> Complete suas informações:</p>

        <fieldset className="secao">

          <div id="dadosPessoais">
            <p> Dados Pessoais </p>
          </div>

          <div>
            <label>Nome Completo:</label>
            <input type="text" name="nome" id="nome" placeholder="Digite seu Nome Civil"
              required onChange={handleChange} value={form.nome} />
          </div>

          <div>
            <label>Data de nascimento:</label>
            <input type="date" name="dataNascimento" id="dataNascimento"
              required onChange={handleChange} value={form.dataNascimento} />
          </div>

          <div>
            <label>Estado Civil:</label>
            <select id="estadoCivil" name="estadoCivil" onChange={handleChange} value={form.estadoCivil} defaultValue="disabled">
              <option value="" disabled>Selecione</option>
              <option value="solteiro" >Solteiro(a)</option>
              <option value="casado">Casado(a)</option>
              <option value="separado">Separado(a)</option>
              <option value="divorciado">Divorciado(a)</option>
              <option value="viuvo">Viúvo(a)</option>
            </select>
          </div>

          <div>
            <label>Gênero:</label>
            <select id="genero" name="genero" onChange={handleChange} value={form.genero} defaultValue="disabled">
              <option value="" disabled>Selecione</option>
              <option value="masculino">Masculino</option>
              <option value="feminino">Feminino</option>
              <option value="outro">Outro</option>
              <option value="prefiro nao responder">Prefiro não responder</option>
            </select>
          </div>

          <div>
            <label>Cargo Pretendido:</label>
            <input onChange={handleChange} type="text" name="cargo" id="cargo" placeholder="Digite aqui" required value={form.cargo} />
          </div>

          <div id="contato">
            <p>Informações de Contato</p>
          </div>

          <div>
            <label>E-mail:</label>
            <input type="email" name="email" id="email" placeholder="email@exemplo.com"
              required onChange={handleChange} value={form.email} />
          </div>

          <div>
            <label>Celular:</label>
            <input type="tel" name="celular" id="celular" placeholder="Digite apenas números"
              minLength="10" maxLength="11" 
              required onChange={handleChange} 
              value={form.celular} pattern="[0-9]+$" />
          </div>

          <div>
            <label>Telefone Fixo:</label>
            <input type="tel" name="telFixo" id="telFixo" placeholder="Digite apenas números"
              minLength="10" maxLength="11" 
              onChange={handleChange} 
              value={form.telFixo} pattern="[0-9]+$" />
          </div>

          <div>
            <label>CEP:</label>
            <input type="text" 
            name="cep" id="cep" 
            required placeholder="Digite apenas números"
              onChange={(e) => {
                handleChange(e);
                if (e.target.value.length === 8) {
                  fetchEndereco(e.target.value);
                }
              }} />
          </div>


          <div>
            <label>Endereço:</label>
            <input type="text" name="endereco" id="endereco" 
            placeholder="ex: Rua, 10. Bloco 1, APT/casa 100"
              required onChange={handleChange} 
              value={form.endereco} />
          </div>

          <div>
            <label>Bairro:</label>
            <input type="text" name="bairro" id="bairro" 
            required 
            onChange={handleChange} 
            value={form.bairro} />
          </div>

          <div>
            <label>Cidade:</label>
            <input type="text" name="cidade" id="cidade" 
            required 
            onChange={handleChange} 
            value={form.cidade} />
          </div>

          <div>
            <label>Estado:</label>
            <input type="text" name="estado" id="estado" 
            required 
            onChange={handleChange} 
            value={form.estado} />
          </div>

          <div id="documentos">
            <p>Documentos</p>
          </div>

          <div>
            <label>RG:</label>
            <input type="text" name="RG" id="RG" 
            required placeholder="Digite apenas números"
            minLength="7" maxLength="7" 
            onChange={handleChange} 
            value={form.RG} 
            pattern="[0-9]+$" />
          </div>

          <div>
            <label>CPF:</label>
            <input
              type="text"
              name="CPF"
              id="CPF"
              required
              placeholder="Digite apenas números"
              minLength="11"
              maxLength="11"
              onChange={(e) => {
                handleChange(e);
                if(e.target.value.length === 11){
                  validarCpf(e.target.value);
                }
              }}
              value={form.CPF}
              pattern="[0-9]+$"
            />
          </div>

          <div className="radio">
            <p id="veiculo">Possui veículo?</p>
            <label>Sim</label>
            <input type="radio" checked={form.veiculo === true} id="veiculoSim" 
            onChange={() => handleRadio('veiculo', true)} />

            <label>Não</label>
            <input type="radio" checked={form.veiculo === false} id="veiculoNao" 
            onChange={() => handleRadio('veiculo', false)} />
          </div>

          <div className="radio">
            <p id="cnh">Possui Habilitação?</p>
            <label>Sim</label>
            <input type="radio" checked={form.cnh === true} id="cnhSim" 
            onChange={() => handleRadio('cnh', true)} />
            <label>Não</label>
            <input type="radio" checked={form.cnh === false} id="cnhNao" 
            onChange={() => handleRadio('cnh', false)} />
          </div>

        </fieldset>

        <div id="botao">
          <button type="submit">Enviar!</button>
        </div>
      </form>

      <br />

      <footer id="footer">
        <p> JobsNET 2021.</p>
        <p>Todos os Direitos Reservados.</p>
      </footer>
    </div>
  );
}

export default App;
