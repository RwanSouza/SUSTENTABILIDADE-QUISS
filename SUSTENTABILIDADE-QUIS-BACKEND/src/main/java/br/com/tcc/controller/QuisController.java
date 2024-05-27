package br.com.tcc.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import br.com.tcc.controller.form.RespostaQuis;
import br.com.tcc.service.RespostaService;

@Controller
@RequestMapping("/v1/quis")
public class QuisController {
	
	@Autowired
	private RespostaService respostaService;
	
	
	@GetMapping("/resposta")
	public ResponseEntity<RespostaQuis> getFoos(@RequestParam Integer codPergunta) {
		
		RespostaQuis respostaDoQuis = respostaService.validarPerguntaDoUsuario(codPergunta);
		
		if(respostaDoQuis != null ) {
			 return ResponseEntity.ok(respostaDoQuis);
		}
		
	     return ResponseEntity.notFound().build();
	}
}
