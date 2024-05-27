package br.com.tcc.service;

import java.util.Map;

import org.springframework.stereotype.Service;

import br.com.tcc.controller.form.RespostaQuis;
import br.com.tcc.utils.PerguntasDoQuis;

@Service
public class RespostaService {

	private Map<Integer, String> codigosComRespostas = PerguntasDoQuis.codigoComResposta();

	public RespostaQuis validarPerguntaDoUsuario(Integer codigo) {

		if (codigosComRespostas.get(codigo) != null) {
			
			RespostaQuis resposta = new RespostaQuis();
			
			resposta.setNumeroDaPergunta(codigo);
			resposta.setRespostaDaPergunta(codigosComRespostas.get(codigo));
			
			return resposta;
			
		} else {
			
			RespostaQuis resposta = new RespostaQuis();
			
			resposta.setNumeroDaPergunta(codigo);
			resposta.setRespostaDaPergunta("Essa pergunta não existe em nosso quis");
			
			return resposta;
		}
	}
}
