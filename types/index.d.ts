interface IKeyBoard {

    hideKeyboardAccessoryBar: (hide: boolean) => void;

    close();

    show();

    disableScroll: (disable: boolean) => void;

}
interface cordova {
    plugins: {
        Keyboard: IKeyBoard;
    }
}

interface Window {
    cordova: cordova
}