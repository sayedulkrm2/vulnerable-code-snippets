using (StreamReader sr = new StreamReader(txtFile.Text))
  {
    string s = sr.ReadToEnd();
    string query = "SELECT email FROM employees WHERE name = @name";
    using (SqlConnection conn = new SqlConnection(connString))
    {
      conn.Open();
      SqlCommand command = new SqlCommand(query, conn);
      command.Parameters.AddWithValue("@name", name);
      using (SqlDataReader reader = command.ExecuteReader())
      {
        while (reader.Read())
        {
          Console.WriteLine("{0}", reader[0]);
        }
      }
    }
  }