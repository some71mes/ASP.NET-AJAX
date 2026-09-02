using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.RazorPages;

namespace AjaxDemo.Pages;

public class IndexModel : PageModel
{
    public JsonResult OnGetHello(string name, int age, string city, string profession) 
    {
        return new JsonResult(new 
        {
            message = $"Привет, {name}! Ваш возраст {age} лет. Город {city}. Выбрана профессия {profession}."
        });
    }
}
