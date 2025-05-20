// Проверка загрузки видео
document.addEventListener('DOMContentLoaded', function() {
    const video = document.getElementById('background-video');
    
    // Обработка ошибок загрузки видео
    video.addEventListener('error', function() {
        console.error('Ошибка загрузки видео');
        document.querySelector('.video-background').style.backgroundColor = '#000';
    });
    
    // Дополнительные эффекты при прокрутке
    window.addEventListener('scroll', function() {
        const scrollPosition = window.scrollY;
        const header = document.querySelector('header');
        
        if (scrollPosition > 50) {
            header.style.backgroundColor = 'rgba(34, 34, 34, 0.95)';
        } else {
            header.style.backgroundColor = '#222';
        }
    });
});