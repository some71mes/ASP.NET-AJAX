using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.RazorPages;

namespace AjaxDemo.Pages;

public class IndexModel : PageModel
{
    // Эти свойства можно оставить, если они нужны для других целей,
    // но в данном примере они не используются.
    public string? Name { get; set; }
    public string? Email { get; set; }
    public string? Phone { get; set; }
    public string? Speciality { get; set; }
    public string? Message { get; set; }

    public void OnGet()
    {
        // Можно оставить пустым
    }

    // Обработчик для AJAX-запроса
    public JsonResult OnGetHello(string name, string age, string city, string profession)
    {
        var message = $"Привет, {name}! Ваш возраст {age} лет. Город {city}. Выбрана профессия {profession}.";
        return new JsonResult(new { message });
    }
}