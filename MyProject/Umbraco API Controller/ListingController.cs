using Microsoft.AspNetCore.Mvc;
using Umbraco.Cms.Core.Models.PublishedContent;
using Umbraco.Cms.Core.Web;
using Umbraco.Cms.Web.Common.Controllers;

namespace MyProject.Umbraco_API_Controller
{
    public class ListingController : UmbracoApiController
    {
        private readonly IUmbracoContextAccessor _umbracoContextAccessor;

        public ListingController(IUmbracoContextAccessor umbracoContextAccessor)
        {
            _umbracoContextAccessor = umbracoContextAccessor;
        }

        [HttpGet]
        public object GetItems()
        {
            if (!_umbracoContextAccessor.TryGetUmbracoContext(out var umbracoContext) || umbracoContext.Content == null)
            {
                return new { Error = "Umbraco context or content cache is unavailable." };
            }

            var contentNode = umbracoContext.Content.GetById(Guid.Parse("85777f17-854d-45c1-ba62-17b7438afe9c"));

            return new []
            {
                new
                {
                    Id = contentNode.Id,
                    Name = contentNode.Name,
                    Description = contentNode.Value<string>("description"),
                    ImageUrl = contentNode.Value<IPublishedContent>("image")?.Url(),
                    Brand = contentNode.Value<string>("brand"),
                    Type = contentNode.Value<string>("type"),
                    Width = contentNode.Value<string>("width")
                },
            };
        }
    }
}