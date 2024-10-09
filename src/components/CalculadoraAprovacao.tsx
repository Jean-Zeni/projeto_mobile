import React from "react";
import { Text, View } from "react-native";
import { styles } from '../styles/styles';

type CalcularNota = {
    nomeAluno: String;
    nota1: number;
    nota2: number;
}

const CalcularAprovacao = (nota: CalcularNota) => {

    let notaFinal: number;

    function calcularMedia() {
        notaFinal = (nota.nota1 + nota.nota2) / 2;

        if (notaFinal >= 7 && notaFinal <= 10) {
            return " aprovado "
        } else if (notaFinal < 7 && notaFinal >= 0) {
            return " Reprovado "
        } else {
            return " Erro! "
        }
    }

    function mediaFinal() {

        return notaFinal

    }

    return (
        <>
            <Text style={styles.titulo2}>
                Status de aprovação: {nota.nomeAluno + calcularMedia()}
            </Text>

            <Text>

            </Text>

            <Text style={styles.titulo2}>
                Média final: {mediaFinal()}
            </Text>

        </>
    )

}

export default CalcularAprovacao;