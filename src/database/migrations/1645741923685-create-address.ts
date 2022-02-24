import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class createAddress1645741923685 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'address',
        columns: [
          {
            name: 'cep',
            type: 'varchar',
            isPrimary: true,
          },
          {
            name: 'logradouro',
            type: 'varchar',
            isNullable: false,
          },
          {
            name: 'complemento',
            type: 'varchar',
            isNullable: false,
          },
          {
            name: 'bairro',
            type: 'varchar',
            isNullable: false,
          },
          {
            name: 'localidade',
            type: 'varchar',
            isNullable: false,
          },
          {
            name: 'uf',
            type: 'varchar',
            isNullable: false,
          },
          {
            name: 'ibge',
            type: 'varchar',
            isNullable: false,
          },
          {
            name: 'gia',
            type: 'varchar',
            isNullable: false,
          },
          {
            name: 'ddd',
            type: 'varchar',
            isNullable: false,
          },
          {
            name: 'siafi',
            type: 'varchar',
            isNullable: false,
          },
          {
            name: 'created_at',
            type: 'timestamp',
            default: 'CURRENT_TIMESTAMP',
          },
          {
            name: 'updated_at',
            type: 'timestamp',
            default: 'CURRENT_TIMESTAMP',
          },
        ],
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('address');
  }
}
