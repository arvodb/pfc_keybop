
import json
def findUrl(title) :
    with open('search_results_output.jsonl', 'r') as lines:
        for line in lines:
            data = json.loads(line)
            if data['title'] == title:
                return data['url']
title = 'Dierya DK61se Teclado Mec\u00e1nico Gaming Mini 60% Red Switch Mechanical Keyboard Retroiluminaci\u00f3n Azul Hielo,Cable USB-Type C,Teclado Ultra-Compacto 61 Teclas Anti-Fantasma para PC/Mac/Windows'
print('www.amazon.com'+findUrl(title))

""" ESTE SCRIPT ES UNA PRUEBA QUE ENCUENTRA EL TÍTULO DE UN RESULTADO """
