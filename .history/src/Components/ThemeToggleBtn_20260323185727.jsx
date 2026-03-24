import { useEffect } from 'react'
import assets from '../assets/assets'

const ThemeToggleBtn = ({ theme, setTheme }) => {

    useEffect(() => {
        // التحقق من التفضيل المحفوظ أو تفضيل النظام
        const savedTheme = localStorage.getItem('theme');
        const prefersDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;

        const initialTheme = savedTheme || (prefersDarkMode ? 'dark' : 'light');
        setTheme(initialTheme);
    }, []);

    useEffect(() => {
        if (theme) {
            // بوتستراب v5.3 يعتمد على سمة data-bs-theme بدلاً من كلاس dark
            document.documentElement.setAttribute('data-bs-theme', theme);

            // للحفاظ على التوافق مع أي تنسيقات قديمة تعتمد على الكلاس
            if (theme === 'dark') {
                document.documentElement.classList.add('dark');
            } else {
                document.documentElement.classList.remove('dark');
            }

            localStorage.setItem('theme', theme);
        }
    }, [theme]);

    return (
        <button className="btn p-0 border-0 shadow-none" type="button">
            {theme === 'dark' ? (
                <img
                    onClick={() => setTheme('light')}
                    src={assets.sun_icon}
                    className="border border-secondary rounded-circle p-1"
                    style={{ width: '34px', height: '34px', objectFit: 'contain' }}
                    alt="Light Mode"
                />
            ) : (
                <img
                    onClick={() => setTheme('dark')}
                    src={assets.moon_icon}
                    className="border border-secondary rounded-circle p-1"
                    style={{ width: '34px', height: '34px', objectFit: 'contain' }}
                    alt="Dark Mode"
                />
            )}
        </button>
    )
}

export default ThemeToggleBtn;