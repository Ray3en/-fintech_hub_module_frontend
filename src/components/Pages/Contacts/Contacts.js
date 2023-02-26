import './Contacts.css'
import {useForm} from 'react-hook-form'

function Contacts(){

    const {register, handleSubmit, formState: {errors} } = useForm()

    return(
        <div className="contacts_page">
            <h1>Contacts page</h1>
            <form 
                className='form_wrapper' 
                onSubmit={handleSubmit(data => console.log(data))}
            >
                <input 
                    {...register('firstname', {
                        required: 'Это поле обязательное'
                    })} 
                    placeholder='Введите имя'/>

                {errors.firstname && <p className='errors'>{errors.firstname.message}</p>}

                <input 
                    {...register('lastname', {
                        required: 'Это поле обязательное'
                    })} 
                    placeholder='Введите фамилию'/>

                {errors.lastname && <p className='errors'>{errors.lastname.message}</p>}

                <input type={'submit'}/>
            </form>
        </div>
    )
}

export default Contacts