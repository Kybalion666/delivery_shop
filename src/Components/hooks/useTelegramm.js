// hooks for telegrammWebApp

const tg = window.Telegram.WebApp

export function useTelegramm() {
    const onToggleButton = () => {
        if(tg.MainButton.isVisible) {
            tg.MainButton.hide()
        } else {
            tg.MainButton.show()
        }
    }

    return {
        onToggleButton,
        tg
    }
}

const webAppUrl = 'https://6552-82-215-108-49.ngrok-free.app';
const token ='6708896074:AAECo-sU1KRPvZrfy6O2Z-fW8sKANRuPktc';