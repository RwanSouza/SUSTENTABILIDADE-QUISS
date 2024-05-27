package br.com.tcc.utils;

import java.util.HashMap;
import java.util.Map;

public class PerguntasDoQuis {
	
	public static Map<Integer, String>  codigoComResposta() {
		Map<Integer, String> perguntas = new HashMap<>();
		
		perguntas.put(1, "b");
		perguntas.put(2, "Essa pergunta é dissertativa");
		perguntas.put(3, "Essa pergunta é dissertativa");
		perguntas.put(4, "a");
		perguntas.put(5, "a");
		perguntas.put(6, "b");
		perguntas.put(7, "b");
		perguntas.put(8, "a");
		
		return perguntas;
	}	
}
