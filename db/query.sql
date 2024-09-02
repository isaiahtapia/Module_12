SELECT 
  e.id AS employee_id,
  CONCAT(e.first_name, ' ', e.last_name) AS full_name,
  p.jobTitle AS jobTitle
FROM employees AS e
LEFT JOIN roles AS p ON e.jobTitle_id = p.id;