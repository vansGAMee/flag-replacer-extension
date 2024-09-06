/**
 * Функция для замены флагов, ссылок и текста на странице.
 */
function replaceFlagsAndEditLinks() {
    // Замена класса "country-sanctioned" на "country-116"
    document.querySelectorAll('.country-sanctioned').forEach(element => {
        element.classList.remove('country-sanctioned');
        element.classList.add('country-116');
    });

    // Замена ссылок на рикролл
    document.querySelectorAll('a[href="/blog/CHESScom/on-the-invasion-of-ukraine"]').forEach(link => {
        link.href = 'https://www.youtube.com/watch?v=dQw4w9WgXcQ';
    });

    // Замена текста в tooltip
    document.querySelectorAll("[v-tooltip='Нажать, чтобы узнать наше отношение к войне в Украине']").forEach(element => {
        element.setAttribute('v-tooltip', 'Россия');
    });
}

/**
 * Наблюдатель для отслеживания изменений в DOM и применения замен.
 */
function observeDOMChanges() {
    const targetNode = document.body;
    const config = { childList: true, subtree: true };

    const observer = new MutationObserver(() => {
        replaceFlagsAndEditLinks();
    });

    observer.observe(targetNode, config);
}

// Запуск функций
replaceFlagsAndEditLinks();
observeDOMChanges();
