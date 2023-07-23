export async function multiFetcher(promesas) {
    try {
    
      const responses = await Promise.all(promesas);
  
      // Obtener los datos de cada respuesta
      const data = await responses.map((response) => response.data);
  
      return data;
    } catch (error) {
      // Manejar errores aquí si es necesario
      console.error('Error fetching data:', error);
      throw error;
    }
    
  }

// async function fetchData(url) {
//     const response = await fetch(url);
//     const data = await response.json();
//     return data;
// }

export default multiFetcher