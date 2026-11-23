using Microsoft.AspNetCore.Mvc;

namespace API.Controllers
{
    public class BuggyController : BaseApiController
    {
        [HttpGet("not-found")]
        public IActionResult GetNotFound()
        {
            System.Console.WriteLine("NOT FOUND !!!!!!!!!!!!!!");
            return NotFound();
        }

        [HttpGet("bad-request")]
        public IActionResult GetBadRequest()
        {
            System.Console.WriteLine("BAD REQUEST !!!!!!!!!!!!!!");
            return BadRequest("This is not a good request");
        }

        [HttpGet("unauthorized")]
        public IActionResult GetUnauthorised()
        {
            System.Console.WriteLine("UA !!!!!!!!!!!!!!");
            return Unauthorized();
        }

        [HttpGet("validation-error")]
        public IActionResult GetValidationError()
        {
            System.Console.WriteLine("VALIDATION ERROR !!!!!!!!!!!!!!");
            ModelState.AddModelError("Problem1", "This is the first error");
            ModelState.AddModelError("Problem2", "This is the second error");
            return ValidationProblem();
        }

        [HttpGet("server-error")]
        public IActionResult GetServerError()
        {
            System.Console.WriteLine("SERVER ERROR !!!!!!!!!!!!!!");
            throw new Exception("This is a server error");
        }
    }
}
