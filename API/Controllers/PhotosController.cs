using AutoMapper;
using DatingApp.API.Data;
using Microsoft.AspNetCore.Authorization;
using Microsoft.Extensions.Options;

namespace DatingApp.API.Controllers
{

    [Authorize]
    [Route("api/users/{userId}/photos")]
    [ApiController]
    public class PhotosController : ControllerBase
    {
        public PhotosController(IDatingRepository repo, IMapper mapper, IOptions<CloudinaryDotNet> cloudinaryDotNet)
        {

        }

    }
}