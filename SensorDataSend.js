import React, { useEffect } from 'react';

const SensorDataSender = ({ onDataSent }) => {
    const intervalTime = 30000; // Define o intervalo de 30 segundos

    const sendSensorData = async (sensorId, temperatura) => {
        const dadosSensor = {
            sensor_id: sensorId,
            temperatura: temperatura
        };

        try {
            const response = await fetch('http://localhost:3000/inserir-dados-sensor', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(dadosSensor)
            });

            if (!response.ok) {
                throw new Error('Erro ao enviar dados do sensor: ' + response.statusText);
            }

            console.log(`Dados do sensor ${sensorId} enviados com sucesso.`);
            onDataSent(); // Chamar callback para atualizar os dados
        } catch (error) {
            console.error(`Erro ao enviar dados do sensor ${sensorId}:`, error);
        }
    };

    useEffect(() => {
        const interval = setInterval(() => {
            // Enviar dados do sensor 1 com temperatura aleatória
            sendSensorData(1, Math.random() * 100); // Exemplo de temperatura aleatória
            // Enviar dados do sensor 2 com temperatura fixa
        }, intervalTime); // Usa o intervalo definido no próprio componente

        // Limpar o intervalo ao desmontar o componente
        return () => clearInterval(interval);
    }, []); // Dependência vazia para executar uma vez na montagem

    return null;
};

export default SensorDataSender;
