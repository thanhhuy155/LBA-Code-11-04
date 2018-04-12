import {combineReducers} from 'redux'
import {handleProgressBar} from './RegisterationProgressbar'
import {handleForgetPasswordProgress} from './ForgetPasswordProgressReducer'
import {handleLogin} from './Login'
import {handleAccountRegister} from './AccountRegisterRDC'
import {handleVerifyAccount} from './VerifyAccountRDC'
import {handleUpdateAccountInformationWhenRegistering} from './UpdateAcountInformationWhenRegistering'
import {handleEnterCurrentEmail, handleEnterVerifiedPassword , handleEnterNewPassword} from './ForgetPasswordRDC'
import {handleSwitchWattingToken} from './MainRDC'
import {handleCreateStore} from './CreateStoreRDC'
const appReducers = combineReducers ({
    handleProgressBar,
    handleForgetPasswordProgress,
    handleLogin,
    handleAccountRegister,
    handleVerifyAccount,
    handleUpdateAccountInformationWhenRegistering,
    handleEnterCurrentEmail,
    handleEnterNewPassword,
    handleEnterVerifiedPassword,
    handleSwitchWattingToken,
    handleCreateStore
})
export default appReducers