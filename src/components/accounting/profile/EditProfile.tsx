import React, { useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../../hook/redux';
import { UserAddress, UserPhone, GetState } from '../../../types';
import { refreshTokens, updateUser } from '../../../redux/slices/userSlice';


interface Props {
    close: () => void;
}

const EditProfile: React.FC<Props> = ({ close }) => {

    const dispatch = useAppDispatch();
    const user = useAppSelector(state => state.userReducer);

    const [firstName, setFirstName] = useState(user.firstName);
    const [lastName, setLastName] = useState(user.lastName);
    const [numberPhone, setNumberPhone] = useState<UserPhone>({
        countryCode: user?.numberPhone?.countryCode || 0,  // Устанавливаем значение по умолчанию
        phoneNumber: user?.numberPhone?.phoneNumber || '',
    });
    const [address, setAddress] = useState<UserAddress>(user.address);
    console.log('setFirstName', 'setLastName', 'setPhone', 'setAddress', setFirstName, setLastName, setNumberPhone, setAddress);

    const phone = user.phone;
    const updateNumberPhoneFromPhone = (phone: string) => {
        const parts = phone.split(')');
        // Проверка на корректное разделение
        if (parts.length === 2) {
            // Удаление открывающей скобки и преобразование кода страны в число
            const countryCode = parseInt(parts[0].replace('(', ''), 10);
            const phoneNumber = parts[1].trim(); // // Телефон остается строкой
            setNumberPhone({
                countryCode: isNaN(countryCode) ? 0 : countryCode,
                phoneNumber,
            })
            console.log('countryCode', countryCode);  // 955
            console.log('phoneNumber', phoneNumber);  // 521111111
        } else {
            console.log("Строка не соответствует формату");
        }
    }

    //Вызовите функцию при изменении phone
    useEffect(() => {
        updateNumberPhoneFromPhone(phone);
    }, [phone]);


    const handleClickSave = () => {
        const userProfile = {
            firstName,
            lastName,
            numberPhone,
            address,
        };

        dispatch(updateUser(userProfile))

        close();
    };


    const handleClickReset = () => {
        setFirstName('');
        setLastName('');
        setNumberPhone({
            countryCode: 0,
            phoneNumber: '',

        });
        setAddress({
            country: '',
            city: '',
            zipCode: 0,
            street: '',
            house: '',
            fullAddress: ''
        });
    };

    return (
        <div>
            <label> First name:
                <input
                    type='text'
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value.trim())}
                />
            </label>
            <label> Last name:
                <input
                    type='text'
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value.trim())}
                />
            </label>
            <label>
                Phone Country Code:
                <input
                    type='text'
                    value={numberPhone.countryCode}
                    onChange={(e) =>
                        setNumberPhone({
                            ...numberPhone,
                            countryCode: parseInt(e.target.value),
                        })

                    }
                />
            </label>
            <label>
                Phone Number:
                <input
                    type='phone'
                    value={numberPhone.phoneNumber}
                    // value={phoneNumber}
                    onChange={(e) =>
                        setNumberPhone({
                            ...numberPhone,
                            phoneNumber: e.target.value,
                        })
                    }
                />
            </label>
            <label>
                Country:
                <input
                    type='text'
                    value={address.country}
                    onChange={(e) =>
                        setAddress({
                            ...address,
                            country: e.target.value,
                        })
                    }
                />
            </label>
            <label>
                City:
                <input
                    type='text'
                    value={address.city}
                    onChange={(e) =>
                        setAddress({
                            ...address,
                            city: e.target.value,
                        })
                    }
                />
            </label>
            <label>
                Zip Code:
                <input
                    type='text'
                    value={address.zipCode}
                    onChange={(e) =>
                        setAddress({
                            ...address,
                            zipCode: parseInt(e.target.value),
                        })
                    }
                />
            </label>
            <label>
                Street:
                <input
                    type='text'
                    value={address.street}
                    onChange={(e) =>
                        setAddress({
                            ...address,
                            street: e.target.value,
                        })
                    }
                />
            </label>
            <label>
                House:
                <input
                    type='text'
                    value={address.house}
                    onChange={(e) =>
                        setAddress({
                            ...address,
                            house: e.target.value,
                        })
                    }
                />
            </label>
            <button onClick={handleClickSave}>Save</button>
            <button onClick={handleClickReset}>Reset</button>
            <button onClick={close}>Close</button>
        </div>
    )
};

export default EditProfile;

// const phone = user.phone;
// const parts = phone.split(')');
// // Проверка на корректное разделение
// if (parts.length === 2) {
// // Удаление открывающей скобки и преобразование кода страны в число
// const countryCode: number = parseInt(parts[0].replace('(', ''), 10);
// setNumberPhone({
// ...numberPhone,
// countryCode: countryCode,
// })
// // Телефон остается строкой
// const phoneNumber = parts[1].trim();
// setNumberPhone({
// ...numberPhone,
// phoneNumber: phoneNumber,
// })
// console.log('countryCode',countryCode, setCountryCode);  // 955
// console.log('phoneNumber',phoneNumber, setPhoneNumber);  // 521111111
// } else {
// console.log("Строка не соответствует формату");
// }


    // const phone = user.phone;
    // // Добавьте функцию для преобразования phone в numberPhone 
    // const updateNumberPhoneFromPhone = (phone: string) => {
    //     const cleanedPhone = phone.replace(/\D/g, ""); // Удаление всех нечисловых символов
    //     const [countryCode, phoneNumber] = [cleanedPhone.slice(0, 3), cleanedPhone.slice(3)]; // Разделение на countryCode и phoneNumber
    //     const countryCodeInt = parseInt(countryCode);
    //     setNumberPhone({
    //         countryCode: isNaN(countryCodeInt) ? 0 : countryCodeInt,
    //         phoneNumber,
    //     });
    //     console.log("countryCode:", countryCodeInt);
    //     console.log("phoneNumber:", phoneNumber);
    // };

// Преобразовать phone в numberPhone
        // let updatedNumberPhone = {
        //   countryCode: 0,
        //   phoneNumber: '',
        // };
    //     const matchResult = phone.match(/\((\d+)\)(\d+)/);
    //     if (!matchResult) {
    //         // Обработка случая, когда строка phone не соответствует ожидаемому формату
    //         console.error(`Invalid phone format: ${phone}`);
    //         return state;
    //     }

    //     const [countryCode, phoneNumber] = matchResult.slice(1).map(Number);
    //     const updatedNumberPhone = {
    //       countryCode, // Просто используйте значение countryCode
    //       phoneNumber: phoneNumber.toString(), // Преобразуйте phoneNumber в строку, если это необходимо
    //   };

    // // Используем локальное хранилище для сохранения данных
    // const storedFirstName = localStorage.getItem('storedFirstName') || user.firstName;
    // const storedLastName = localStorage.getItem('storedLastName') || user.lastName;
    // const storedPhone = localStorage.getItem('storedPhone') || user.phone;
    // const storedAddress = localStorage.getItem('storedPhone') || user.address;