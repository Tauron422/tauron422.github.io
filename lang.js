(function () {
	var stored;
	try { stored = localStorage.getItem('nest-lang'); } catch (e) {}
	var lang = stored === 'ru' || stored === 'en' ? stored
		: ((navigator.language || '').toLowerCase().indexOf('ru') === 0 ? 'ru' : 'en');
	function apply(l) {
		document.documentElement.dataset.lang = l;
		document.querySelectorAll('[data-lang-btn]').forEach(function (b) {
			b.classList.toggle('active', b.dataset.langBtn === l);
		});
		try { localStorage.setItem('nest-lang', l); } catch (e) {}
	}
	document.querySelectorAll('[data-lang-btn]').forEach(function (b) {
		b.addEventListener('click', function () { apply(b.dataset.langBtn); });
	});
	apply(lang);
})();
