
// eslint-disable-next-line import/no-extraneous-dependencies
import { enqueueSnackbar } from 'notistack';
import { useMemo, useEffect, useCallback } from 'react'
import { useDispatch, useSelector } from 'react-redux';

import { getAccount, onSetAccount, onRemoveAccount } from 'src/redux/slices/accountSlice';

const useAuth = () =>{
    const account = useSelector(getAccount);
    const sessionAccountData = JSON.parse(sessionStorage.getItem('account'));
    const dispatch = useDispatch();

    useEffect(()=>{
        if(account) {
            sessionStorage.setItem('account', JSON.stringify(account));
        }
    },[account])

    const accountData = useMemo(()=>{
        if(sessionAccountData) {
            return {
                email: sessionAccountData.email,
                displayName: sessionAccountData.displayName,
                imageUrl: sessionAccountData.imageUrl
            }
        } if(account) {
            return {
                email: account.email,
                displayName: account.displayName,
                imageUrl: account.imageUrl
            }
        }
        return undefined;
    },[account, sessionAccountData]);

    const isAuth = useMemo(()=> !!accountData?.email &&!!accountData?.displayName,[accountData])

    

    const onLogin = useCallback(async ({email})=>{
        await dispatch(onSetAccount({email}));
        enqueueSnackbar("Login success", {variant: 'success'});
    },[dispatch])

    const onLogout = useCallback(()=>{
        dispatch(onRemoveAccount());
        sessionStorage.removeItem('account');
        enqueueSnackbar("Logout success", {variant: 'success'});
    },[dispatch])

    return {
        isAuth,
        account: accountData,
        onLogin,
        onLogout
    }
}

export default useAuth;