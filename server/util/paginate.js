function paginate(array, page_size, page_number) {
    // - 1 because users read page number starting from 1, not 0
    return array.slice((page_number - 1) * page_size, page_number * page_size);
  }
  
module.exports = paginate;
  