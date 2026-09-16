using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.RazorPages;

namespace aspnetWebApp.Pages;

public class IndexModel : PageModel
{
    [BindProperty]
    public string Name { get; set; } = "";

    [BindProperty]
    public string Phone { get; set; } = "";

    [BindProperty]
    public string Email { get; set; } = "";

    [BindProperty]
    public string City { get; set; } = "";

    [BindProperty]
    public string Speciality { get; set; } = "";

    [BindProperty]
    public string Course { get; set; } = "";

    [BindProperty]
    public string StudyFormat { get; set; } = "";

    [BindProperty]
    public string BirthDate { get; set; } = "";

    [BindProperty]
    public string[] Technologies { get; set; } = Array.Empty<string>();

    [BindProperty]
    public string About { get; set; } = "";

    public string Message { get; set; } = "";

    public void OnGet()
    {
        // Message = "Привет! Сообщение от C#";
    }

    public IActionResult OnPost()
    {
        string technologies = Technologies != null && Technologies.Length > 0
            ? string.Join(", ", Technologies)
            : "Не выбраны";

        string about = string.IsNullOrWhiteSpace(About)
            ? "Не указано"
            : About;

        string message = $"Анкета студента\n\n" +
                $"Имя: {Name}\n" +
                $"Телефон: {Phone}\n" +
                $"Email: {Email}\n" +
                $"Город: {City}\n" +
                $"Специальность: {Speciality}\n" +
                $"Курс: {Course}\n" +
                $"Формат обучения: {StudyFormat}\n" +
                $"Дата рождения: {BirthDate}\n" +
                $"Технологии: {technologies}\n" +
                $"О себе: {about}";

        return Content(message);
    }
}