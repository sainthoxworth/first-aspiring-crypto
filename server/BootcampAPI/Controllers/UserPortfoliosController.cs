using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using BootcampAPI.Models;

namespace BootcampAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UserPortfoliosController : ControllerBase
    {
        private readonly DBFullStackContext _context;

        public UserPortfoliosController()
        {
            _context = new DBFullStackContext();
        }

        // GET: api/UserPortfolios
        [HttpGet]
        public async Task<ActionResult<IEnumerable<UserPortfolio>>> GetUserPortfolios()
        {
            return await _context.UserPortfolios.ToListAsync();
        }

        // GET: api/UserPortfolios/5
        [HttpGet("{id}")]
        public async Task<ActionResult<UserPortfolio>> GetUserPortfolio(int id)
        {
            var userPortfolio = await _context.UserPortfolios.FindAsync(id);

            if (userPortfolio == null)
            {
                return NotFound();
            }

            return userPortfolio;
        }

        // PUT: api/UserPortfolios/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutUserPortfolio(int id, UserPortfolio userPortfolio)
        {
            if (id != userPortfolio.UserPortfolioId)
            {
                return BadRequest();
            }

            _context.Entry(userPortfolio).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!UserPortfolioExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }

        // POST: api/UserPortfolios
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<UserPortfolio>> PostUserPortfolio(UserPortfolio userPortfolio)
        {
            _context.UserPortfolios.Add(userPortfolio);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetUserPortfolio", new { id = userPortfolio.UserPortfolioId }, userPortfolio);
        }

        // DELETE: api/UserPortfolios/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteUserPortfolio(int id)
        {
            var userPortfolio = await _context.UserPortfolios.FindAsync(id);
            if (userPortfolio == null)
            {
                return NotFound();
            }

            _context.UserPortfolios.Remove(userPortfolio);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool UserPortfolioExists(int id)
        {
            return _context.UserPortfolios.Any(e => e.UserPortfolioId == id);
        }
    }
}
