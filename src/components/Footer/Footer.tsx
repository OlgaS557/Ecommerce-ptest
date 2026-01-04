import { FC } from 'react';

export const data = {
    'Products': ['Men', 'Women', 'Kids', 'Sale', 'Collections'],
    'Get help': ['Order status', 'Shipping and delovery', 'Returns', 'Payment options'],
    'Legals': ['Terms of services', 'Privacy policy'],
    'Contact': {
        'Email': 'ecommerce@gmail.com',
        'Phone': '972 756 555-0123',
        'Address': '2464 Royal Ln. Mesa, New Jersey 4563'
    }
}

const Footer:FC = () =>{



    return (
        <>
            <div className='footer'>
                <div className='footer__container'>
                    <div className="footer__container_info">
                        <div className='footer__container_info_logo'>
                            LOGO
                        </div>
                        <div className='footer__container_info_item'>
                            <div className='footer__container_info_item_title'>Products</div>
                            <>
                            {['Men', 'Women', 'Kids', 'Sale', 'Collections'].map((item, index) => 
                            <div key={index} className='footer__container_info_item_desc'>{item}</div>
                                
                            )}
                            </>
                        </div>
                        <div className='footer__container_info_item'>
                            <div className='footer__container_info_item_title'>Get help</div>
                            <>
                            {['Order status', 'Shipping and delovery', 'Returns', 'Payment options'].map((item, index) => 
                             <div key={index} className='footer__container_info_item_desc'>{item}</div>
                            )}
                            </>
                        </div>
                        <div className='footer__container_info_item'>
                            <div className='footer__container_info_item_title'>Legals</div>
                            <>
                            {['Terms of services', 'Privacy policy'].map((item, index) => 
                            <div key={index} className='footer__container_info_item_desc'>{item}</div>
                            )}
                            </>
                        </div>
                        <div className='footer__container_info_item'>
                            <div className='footer__container_info_item_title'>Contact</div>
                            <div className='footer__container_info_item_desc'>
                                <div>Email</div>
                                <p>ecommerce@gmail.com</p>
                            </div>
                            <div className='footer__container_info_item_desc'>
                                <div>Phone</div>
                                <p>972 756 555-0123</p>
                            </div>
                            <div className='footer__container_info_item_desc'>
                            <div>Address</div>
                                <p>2464 Royal Ln. Mesa, New Jersey 4563</p>
                            </div>
                        </div>
                        <div className='last'></div>
                    </div>
                    <div className='footer__container_line'></div>
                    <div className='footer__container_bottom'>
                        <div className='footer__container_bottom_name'>... 2022</div>
                        <div className='footer__container_bottom_social'>
                            <div className='footer__container_bottom_social_item'>
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fillRule="evenodd" clipRule="evenodd" d="M22 12C22 6.478 17.522 2 12 2C6.478 2 2 6.478 2 12C2 17.522 6.478 22 12 22C12.0587 22 12.1172 21.9988 12.1758 21.9977V14.2131H10.0273V11.7093H12.1758V9.86682C12.1758 7.72998 13.4803 6.56696 15.3864 6.56696C16.2992 6.56696 17.0838 6.63501 17.3125 6.66537V8.89865H15.9981C14.9611 8.89865 14.7603 9.39151 14.7603 10.1146V11.7093H17.2399L16.9167 14.2131H14.7603V21.6136C18.9402 20.4154 22 16.5645 22 12Z" fill="white"/>
                                </svg>
                            </div>
                            <div className='footer__container_bottom_social_item'>
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fillRule="evenodd" clipRule="evenodd" d="M13.2879 2.00013C14.8707 2.00444 15.258 2.01991 16.1306 2.06132C17.1935 2.10818 17.9205 2.28003 18.5574 2.52622C19.2217 2.77622 19.8275 3.17091 20.3277 3.67885C20.8397 4.179 21.2305 4.78065 21.4846 5.45266C21.7308 6.08575 21.9027 6.81637 21.9495 7.8791C21.9897 8.79342 21.9984 9.17375 22 10.9738L22.0002 12.5479C21.9985 14.769 21.9853 15.1328 21.9418 16.1233C21.8949 17.1861 21.7228 17.9129 21.4768 18.5498C20.957 19.8938 19.894 20.9565 18.5496 21.4762C17.9165 21.7224 17.1858 21.8943 16.1228 21.9411C15.0559 21.9881 14.7159 21.9997 11.9999 21.9997L11.7178 21.9997C9.2586 21.9988 8.90561 21.9864 7.87695 21.9411C6.81385 21.8943 6.08705 21.7224 5.45002 21.4762C4.78566 21.2262 4.17992 20.8315 3.67967 20.3236C3.17163 19.8234 2.77701 19.2218 2.52299 18.5498C2.27676 17.9167 2.10472 17.1861 2.05785 16.1233C2.01935 15.2471 2.00455 14.8613 2.00049 13.2464L2.00061 10.7173C2.00492 9.13475 2.0204 8.74753 2.06182 7.87513C2.10869 6.8124 2.28058 6.08575 2.52681 5.44884C2.77701 4.78462 3.17163 4.179 3.67967 3.67885C4.17992 3.16694 4.78169 2.77622 5.45399 2.52225C6.08705 2.27622 6.81782 2.10421 7.88076 2.05735C8.75715 2.01886 9.14304 2.00406 10.7583 2L13.2879 2.00013ZM13.0544 3.81645H10.9701C9.23242 3.81985 8.86951 3.83429 7.97068 3.87421C6.99765 3.91725 6.4661 4.08132 6.11438 4.21807C5.68053 4.37818 5.28973 4.63214 4.96549 4.96426C4.62934 5.28477 4.37532 5.67931 4.21503 6.11307C4.07825 6.46472 3.91415 6.99219 3.87125 7.969C3.82772 8.94213 3.81454 9.28887 3.81283 11.4534V12.5646C3.81454 14.7286 3.82772 15.0723 3.87125 16.0492C3.91415 17.022 4.07825 17.5534 4.21503 17.9051C4.37532 18.3387 4.62934 18.7294 4.96152 19.0537C5.28195 19.3859 5.67671 19.6398 6.11041 19.8001C6.46213 19.9368 6.98971 20.1009 7.96671 20.1438C8.86229 20.1838 9.22749 20.1982 10.966 20.2016H13.0491C14.7868 20.1982 15.1496 20.1838 16.0485 20.1438C17.0217 20.1009 17.553 19.9368 17.9048 19.8001C18.7763 19.464 19.468 18.7724 19.8041 17.9011C19.9409 17.5495 20.105 17.022 20.148 16.0452C20.1897 15.1074 20.2036 14.7563 20.2062 12.8155V11.2023C20.2036 9.26091 20.1897 8.90673 20.148 7.969C20.105 6.99601 19.9409 6.46472 19.8041 6.11307C19.6438 5.67931 19.3898 5.28859 19.0576 4.96426C18.7372 4.63214 18.3424 4.37818 17.9087 4.21807C17.557 4.08132 17.0294 3.91725 16.0524 3.87421C15.1569 3.83429 14.7945 3.81985 13.0544 3.81645ZM12.0037 6.86323C14.841 6.86323 17.1427 9.16451 17.1427 12.0012C17.1427 14.8379 14.841 17.1392 12.0037 17.1392C9.16658 17.1392 6.86468 14.8379 6.86468 12.0012C6.86468 9.16451 9.16658 6.86323 12.0037 6.86323ZM12.0037 8.66833C10.1631 8.66833 8.67015 10.1609 8.67015 12.0012C8.67015 13.8416 10.1631 15.3341 12.0037 15.3341C13.8444 15.3341 15.3372 13.8416 15.3372 12.0012C15.3372 10.1609 13.8444 8.66833 12.0037 8.66833ZM17.3459 5.4606C18.0086 5.4606 18.5458 5.99753 18.5458 6.66008C18.5458 7.32248 18.0086 7.85957 17.3459 7.85957C16.6834 7.85957 16.1462 7.32248 16.1462 6.66008C16.1462 5.99753 16.6834 5.4606 17.3459 5.4606Z" fill="white"/>
                                </svg>
                                </div>
                            <div className='footer__container_bottom_social_item'>
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fillRule="evenodd" clipRule="evenodd" d="M22 5.89415C21.2563 6.21538 20.4638 6.42831 19.6375 6.53169C20.4875 6.032 21.1362 5.24677 21.4412 4.30031C20.6488 4.76554 19.7738 5.09415 18.8412 5.27754C18.0887 4.48862 17.0162 4 15.8462 4C13.5763 4 11.7487 5.81415 11.7487 8.03815C11.7487 8.35815 11.7762 8.66585 11.8438 8.95877C8.435 8.79508 5.41875 7.18646 3.3925 4.736C3.03875 5.34031 2.83125 6.032 2.83125 6.77662C2.83125 8.17477 3.5625 9.41415 4.6525 10.1317C3.99375 10.1194 3.3475 9.93108 2.8 9.63446C2.8 9.64677 2.8 9.66277 2.8 9.67877C2.8 11.6406 4.22125 13.2702 6.085 13.6455C5.75125 13.7354 5.3875 13.7785 5.01 13.7785C4.7475 13.7785 4.4825 13.7637 4.23375 13.7095C4.765 15.3083 6.2725 16.4837 8.065 16.5218C6.67 17.5963 4.89875 18.2437 2.98125 18.2437C2.645 18.2437 2.3225 18.2289 2 18.1883C3.81625 19.3415 5.96875 20 8.29 20C15.835 20 19.96 13.8462 19.96 8.512C19.96 8.33354 19.9538 8.16123 19.945 7.99015C20.7587 7.42154 21.4425 6.71138 22 5.89415Z" fill="white"/>
                                </svg>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}


export default Footer;
