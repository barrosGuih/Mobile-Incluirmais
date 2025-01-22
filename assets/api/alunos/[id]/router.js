import { NextResponse } from 'next/server'
import pool from "@/lib/db";

export async function PUT(request, { params }) {
  try {
    const { id } = params;
    const { nome, matricula } = await request.json();
    const client = await pool.connect();
    await client.query('UPDATE apoiado SET nome = $1, matricula = $2 WHERE id = $3', [nome, matricula, id] );
    client.release();
    return NextResponse.json({ message: 'Aluno editado com sucesso' });
  } catch (error) {
    console.error('Erro atualizando aluno:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}

export async function DELETE(request, { params }) {
    try {
      const { id } = params;
      const client = await pool.connect();
      await client.query('DELETE FROM aluno WHERE id = $1', [id] );
      client.release();
      return NextResponse.json({ message: 'Aluno removido com sucesso' });
    } catch (error) {
      console.error('Erro removendo aluno:', error);
      return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
    }
  }